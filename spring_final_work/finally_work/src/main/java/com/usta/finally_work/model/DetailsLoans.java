package com.usta.finally_work.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "details_loans")
public class DetailsLoans implements Serializable {
    private static final long serialVersionIUD = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_detail_loan")
    private long idDetailLoan;

    @JoinColumn(name="id_loan", referencedColumnName = "id_loan")
    @ManyToOne(fetch = FetchType.EAGER)
    private Loans loan;

    @JoinColumn(name="id_book", referencedColumnName = "id_book")
    @ManyToOne(fetch = FetchType.EAGER)
    private Books book;

    @Column(name = "return_date")
    private Date returnDate;

    @Column(name = "overdue_day")
    private int overdue_day;

    @Column(name = "description")
    private String description;

    @Column(name = "deliver_date")
    private Date deliverDate;

    public DetailsLoans() {
    }

    public DetailsLoans(long idDetailLoan, Loans loan, Books book, Date returnDate, int overdue_day, String description, Date deliverDate) {
        this.idDetailLoan = idDetailLoan;
        this.loan = loan;
        this.book = book;
        this.returnDate = returnDate;
        this.overdue_day = overdue_day;
        this.description = description;
        this.deliverDate = deliverDate;
    }

    public long getIdDetailLoan() {
        return idDetailLoan;
    }

    public void setIdDetailLoan(long idDetailLoan) {
        this.idDetailLoan = idDetailLoan;
    }

    public Loans getLoan() {
        return loan;
    }

    public void setLoan(Loans loan) {
        this.loan = loan;
    }

    public Books getBook() {
        return book;
    }

    public void setBook(Books book) {
        this.book = book;
    }

    public Date getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(Date returnDate) {
        this.returnDate = returnDate;
    }

    public int getOverdue_day() {
        return overdue_day;
    }

    public void setOverdue_day(int overdue_day) {
        this.overdue_day = overdue_day;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDeliverDate() {
        return deliverDate;
    }

    public void setDeliverDate(Date deliverDate) {
        this.deliverDate = deliverDate;
    }
}
