package com.usta.finally_work.service;

import com.usta.finally_work.model.Loans;
import com.usta.finally_work.repository.LoansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoansService {
    @Autowired
    private LoansRepository loansRepository;

    public List<Loans> toListLoans(){
        return loansRepository.findAll();
    }

    public Loans createLoans(Loans loans){
        return loansRepository.save(loans);
    }
    public Optional<Loans> searchLoans(Long id){
        return loansRepository.findById(id);
    }

    public void deleteById(Long id){
        loansRepository.deleteById(id)  ;
    }
}
