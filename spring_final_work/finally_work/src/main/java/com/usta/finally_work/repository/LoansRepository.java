package com.usta.finally_work.repository;


import com.usta.finally_work.model.Customers;
import com.usta.finally_work.model.Loans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LoansRepository extends JpaRepository<Loans, Long> {
    @Query("SELECT lo.idCustomer FROM Loans lo INNER JOIN lo.idCustomer e where lo.idLoan = ?1 ")
    List<Customers> nameCustomer(Long id);
}
