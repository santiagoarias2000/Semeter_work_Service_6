package com.usta.finally_work.rest;

import com.usta.finally_work.model.Customers;
import com.usta.finally_work.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/customer")
public class CustomerRest {

    @Autowired
    private CustomerService customerService;

    @GetMapping("seeListCustomer")
    private ResponseEntity<List<Customers>> toListCustomer(){
        return ResponseEntity.ok(customerService.toListCustomer());
    }

    @PostMapping("createCustomer")
    private ResponseEntity<Customers> saveCustomer(@RequestBody Customers customers){
        Customers temporal = customerService.createCustomer(customers);
        try{
            return ResponseEntity.created(new URI("/api/customer" + temporal.getIdCustomers())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listCustomer/{id}")
    private ResponseEntity<Optional<Customers>> listCustomerById(@PathVariable("id") Long id){
        return ResponseEntity.ok(customerService.searchId(id));
    }

    @DeleteMapping("delete/{id}")
    private ResponseEntity<String> deleteCustomer(@PathVariable("id") Long id){
        customerService.deleteById(id);
        return ResponseEntity.ok("Delete customer successful");
    }

    @PutMapping("/edit")
    private ResponseEntity<Customers> editCustomer(@RequestBody Customers customer){
        Customers temporal = customerService.createCustomer(customer);
        try{
            return ResponseEntity.created(new URI("/api/customer" + temporal.getIdCustomers())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/totalCustomer")
    private ResponseEntity<String> listarTotalCliente(){
        return ResponseEntity.ok("El total de clientes es: ");
    }

}
