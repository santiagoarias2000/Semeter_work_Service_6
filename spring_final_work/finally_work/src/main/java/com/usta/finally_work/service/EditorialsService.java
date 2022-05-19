package com.usta.finally_work.service;

import com.usta.finally_work.model.Editorials;
import com.usta.finally_work.repository.EditorialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EditorialsService {
    @Autowired
    private EditorialsRepository editorialsRepository;

    public List<Editorials> toListEditorials() {
        return editorialsRepository.findAll();
    }

    public Editorials createEditorials(Editorials editorials) {
        return editorialsRepository.save(editorials);
    }

    public Optional<Editorials> searchById(Long id) {
        return editorialsRepository.findById(id);
    }

    public void deleteById(Long id) {
        editorialsRepository.deleteById(id);
    }

}
