package com.usta.finally_work.repository;

import com.usta.finally_work.model.AuthorsBooks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorsBooksRepository extends JpaRepository<AuthorsBooks, Long> {
}
