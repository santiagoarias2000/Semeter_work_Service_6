package com.usta.finally_work.service;

import com.usta.finally_work.model.DetailsLoans;
import com.usta.finally_work.repository.DetailsLoansRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DetailsLoansService {
    @Autowired
    private DetailsLoansRepository detailsLoansRepository;

    public List<DetailsLoans> toListDetailsLoans(){
        return detailsLoansRepository.findAll();
    }

    public DetailsLoans createDetailsLoans(DetailsLoans detailsLoans){
        return detailsLoansRepository.save(detailsLoans);
    }

    public Optional<DetailsLoans> searchDetailsLoans(Long id){
        return detailsLoansRepository.findById(id);
    }

    public void deleteDetailsLoans(Long id){
        detailsLoansRepository.deleteById(id);
    }
}
