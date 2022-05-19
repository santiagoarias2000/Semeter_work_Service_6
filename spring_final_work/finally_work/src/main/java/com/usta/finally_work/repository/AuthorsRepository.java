package com.usta.finally_work.repository;

import com.usta.finally_work.model.Authors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorsRepository extends JpaRepository<Authors,Long> {
}
