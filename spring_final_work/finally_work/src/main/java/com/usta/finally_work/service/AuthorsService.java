package com.usta.finally_work.service;

import com.usta.finally_work.model.Authors;
import com.usta.finally_work.repository.AuthorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorsService {
    @Autowired
    private AuthorsRepository authorsRepository;

    public List<Authors> toListAuthors() {
        return authorsRepository.findAll();
    }

    public Authors createAuthors(Authors authors) {
        return authorsRepository.save(authors);
    }

    public Optional<Authors> searchById(Long id){
        return authorsRepository.findById(id);
    }

    public void deleteById(Long id){
        authorsRepository.deleteById(id);
    }
}
