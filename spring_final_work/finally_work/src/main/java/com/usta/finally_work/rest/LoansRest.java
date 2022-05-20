package com.usta.finally_work.rest;

import com.usta.finally_work.model.Loans;
import com.usta.finally_work.service.LoansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/loans")
public class LoansRest {

    @Autowired
    private LoansService loansService;

    @GetMapping("seeList")
    private ResponseEntity<List<Loans>> toListLoans(){
        return ResponseEntity.ok(loansService.toListLoans());
    }

    @PostMapping("create")
    private ResponseEntity<Loans> saveAuthors(@RequestBody Loans loans){
        Loans temporal = loansService.createLoans(loans);
        try{
            return ResponseEntity.created(new URI("/api/loans" + temporal.getIdLoan())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listOne/{id}")
    private ResponseEntity<Optional<Loans>> listLoansById(@PathVariable("id") Long id){
        return ResponseEntity.ok(loansService.searchLoans(id));
    }

    @DeleteMapping("delete/{id}")
    private ResponseEntity<String> deleteLoans(@PathVariable("id") Long id){
        loansService.deleteById(id);
        return ResponseEntity.ok("Delete Loans successful");
    }

    @PutMapping("/edit")
    private ResponseEntity<Loans> editLoans(@RequestBody Loans loans){
        Loans temporal = loansService.createLoans(loans);
        try{
            return ResponseEntity.created(new URI("/api/loans" + temporal.getIdLoan())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/total")
    private ResponseEntity<String> listarTotalCliente(){
        return ResponseEntity.ok("El total de clientes es: ");
    }
}
