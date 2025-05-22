<?php
class Book {
    private $code_book;
    private $name;
    private $qty;

    public function __construct($code_book, $name, $qty) {
        $this->setCodeBook($code_book);
        $this->name = $name;
        $this->setQty($qty);
    }

    private function setCodeBook($code_book) {
        if (preg_match('/^[A-Z]{2}\d{2}$/', $code_book)) {
            $this->code_book = $code_book;
        } else {
            throw new InvalidArgumentException("Format code_book tidak valid. Harus dalam format BB00 (2 huruf besar diikuti 2 angka)");
        }
    }

    public function getCodeBook() {
        return $this->code_book;
    }

    private function setQty($qty) {
        if (is_int($qty) && $qty > 0) {
            $this->qty = $qty;
        } else {
            throw new InvalidArgumentException("qty harus berupa integer positif");
        }
    }

    public function getQty() {
        return $this->qty;
    }

    // Untuk property name tidak diminta setter/getter khusus
    public function getName() {
        return $this->name;
    }
}

// Contoh penggunaan:
try {
    $book1 = new Book("AB12", "Buku Pemrograman", 10);
    echo "Code: " . $book1->getCodeBook() . "\n";
    echo "Name: " . $book1->getName() . "\n";
    echo "Qty: " . $book1->getQty() . "\n";
    
    // Contoh yang akan error:
    // $book2 = new Book("ab12", "Buku Error", 0);
} catch (InvalidArgumentException $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
?>