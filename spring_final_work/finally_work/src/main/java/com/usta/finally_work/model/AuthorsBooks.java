package com.usta.finally_work.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "authors_books")
public class AuthorsBooks implements Serializable {
    private static final long serialVersionIUD = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_author_book")
    private long idAuthorBook;

    @JoinColumn(name="id_book", referencedColumnName = "id_book")
    @ManyToOne(fetch = FetchType.EAGER)
    private Books book;

    @JoinColumn(name="id_author", referencedColumnName = "id_author")
    @ManyToOne(fetch = FetchType.EAGER)
    private Authors author;

    public AuthorsBooks() {
    }

    public AuthorsBooks(long idAuthorBook, Books book, Authors author) {
        this.idAuthorBook = idAuthorBook;
        this.book = book;
        this.author = author;
    }

    public long getIdAuthorBook() {
        return idAuthorBook;
    }

    public void setIdAuthorBook(long idAuthorBook) {
        this.idAuthorBook = idAuthorBook;
    }

    public Books getBook() {
        return book;
    }

    public void setBook(Books book) {
        this.book = book;
    }

    public Authors getAuthor() {
        return author;
    }

    public void setAuthor(Authors author) {
        this.author = author;
    }
}
