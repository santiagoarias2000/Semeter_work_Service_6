package com.usta.finally_work.repository;

import com.usta.finally_work.model.Loans;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoansRepository extends JpaRepository<Loans, Long> {
}
