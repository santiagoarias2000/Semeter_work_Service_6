package com.usta.finally_work.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "authors")
public class Authors implements Serializable {
    private static final long serialVersionIUD = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_author")
    private long idAuthor;

    @Column(name = "name")
    private String name;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "nationality")
    private String nationality;

    @Column(name = "description")
    private String description;

    public Authors() {
    }

    public Authors(long idAuthor, String name, String lastname, String nationality, String description) {
        this.idAuthor = idAuthor;
        this.name = name;
        this.lastname = lastname;
        this.nationality = nationality;
        this.description = description;
    }

    public long getIdAuthor() {
        return idAuthor;
    }

    public void setIdAuthor(long idAuthor) {
        this.idAuthor = idAuthor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
