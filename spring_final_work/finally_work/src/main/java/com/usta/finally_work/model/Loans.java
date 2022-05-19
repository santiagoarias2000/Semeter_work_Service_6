package com.usta.finally_work.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name="loans")
public class Loans implements Serializable {
    private static final long serialVersionIUD = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_loan")
    private long idLoan;

    @Column(name="start_date")
    private Date startDate;

    @Column(name="description")
    private String description;

    @JoinColumn(name="id_customer", referencedColumnName = "id_customer")
    @ManyToOne(fetch = FetchType.EAGER)
    private Customers idCustomer;

    public Loans() {
    }

    public Loans(long idLoan, Date startDate, String description, Customers idCustomer) {
        this.idLoan = idLoan;
        this.startDate = startDate;
        this.description = description;
        this.idCustomer = idCustomer;
    }

    public long getIdLoan() {
        return idLoan;
    }

    public void setIdLoan(long idLoan) {
        this.idLoan = idLoan;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Customers getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(Customers idCustomer) {
        this.idCustomer = idCustomer;
    }
}
