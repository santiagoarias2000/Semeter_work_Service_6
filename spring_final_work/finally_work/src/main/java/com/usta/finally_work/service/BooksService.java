package com.usta.finally_work.service;

import com.usta.finally_work.model.Books;
import com.usta.finally_work.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BooksService {

    @Autowired
    private BooksRepository booksRepository;

    public List<Books> toListBooks(){
        return booksRepository.findAll();
    }

    public Books createBooks(Books books){
        return booksRepository.save(books);
    }
    public Optional<Books> searchBooks(Long id){
        return booksRepository.findById(id);
    }
    public void deleteBooks(Long id){
        booksRepository.deleteById(id);
    }
}
