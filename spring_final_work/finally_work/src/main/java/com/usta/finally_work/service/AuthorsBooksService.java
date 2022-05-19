package com.usta.finally_work.service;

import com.usta.finally_work.model.AuthorsBooks;
import com.usta.finally_work.repository.AuthorsBooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorsBooksService {

    @Autowired
    private AuthorsBooksRepository authorsBooksRepository;

    public List<AuthorsBooks> toListAuthorsBooks(){
        return authorsBooksRepository.findAll();
    }

    public AuthorsBooks createAuthorsBooks(AuthorsBooks authorsBooks){
        return authorsBooksRepository.save(authorsBooks);
    }

    public Optional<AuthorsBooks> searchAuthorsBooks(Long id){
        return authorsBooksRepository.findById(id);
    }

    public void deleteAuthorsBooks(Long id){
        authorsBooksRepository.deleteById(id);
    }
}
