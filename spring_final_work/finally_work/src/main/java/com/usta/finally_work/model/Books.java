package com.usta.finally_work.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "books")
public class Books implements Serializable {
    private static final long serialVersionIUD = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_book")
    private long idBook;

    @Column(name="title")
    private String title;

    @Column(name = "publication_date")
    private Date publicationDate;

    @Column(name = "code")
    private int code;

    @Column(name = "isbn")
    private String isbn;

    @JoinColumn(name="id_editorial", referencedColumnName = "id_editorial")
    @ManyToOne(fetch = FetchType.EAGER)
    private Editorials editorial;

    public Books() {
    }

    public Books(long idBook, String title, Date publicationDate, int code, String isbn, Editorials editorial) {
        this.idBook = idBook;
        this.title = title;
        this.publicationDate = publicationDate;
        this.code = code;
        this.isbn = isbn;
        this.editorial = editorial;
    }

    public long getIdBook() {
        return idBook;
    }

    public void setIdBook(long idBook) {
        this.idBook = idBook;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(Date publicationDate) {
        this.publicationDate = publicationDate;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Editorials getEditorial() {
        return editorial;
    }

    public void setEditorial(Editorials editorial) {
        this.editorial = editorial;
    }
}
