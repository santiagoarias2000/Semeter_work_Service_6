package com.usta.finally_work.repository;

import com.usta.finally_work.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepository extends JpaRepository<Books, Long> {
}
