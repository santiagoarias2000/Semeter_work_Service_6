package com.usta.finally_work.repository;

import com.usta.finally_work.model.Books;
import com.usta.finally_work.model.DetailsLoans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DetailsLoansRepository extends JpaRepository<DetailsLoans, Long> {
    @Query("SELECT dl.book FROM DetailsLoans dl INNER JOIN dl.book e where dl.idDetailLoan = ?1 ")
    List<Books> nameBook(Long id);
}
