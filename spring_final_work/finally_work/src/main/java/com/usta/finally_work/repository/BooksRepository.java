package com.usta.finally_work.repository;

import com.usta.finally_work.model.Books;
import com.usta.finally_work.model.Editorials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BooksRepository extends JpaRepository<Books, Long> {

   @Query("SELECT boo.editorial FROM Books boo INNER JOIN boo.editorial e where boo.idBook = ?1 ")
    List<Editorials> nameEditorials(Long id);
}
