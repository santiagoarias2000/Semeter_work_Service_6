package com.usta.finally_work.service;

import com.usta.finally_work.model.Customers;
import com.usta.finally_work.repository.CustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomersRepository customersRepository;

    public List<Customers> toListCustomer() {
        return customersRepository.findAll();
    }

    public Customers createCustomer(Customers customer) {
        return customersRepository.save(customer);
    }

    public Optional<Customers> searchId(Long id) {
        return customersRepository.findById(id);
    }

    public void deleteById(Long id){
        customersRepository.deleteById(id);
    }


}
