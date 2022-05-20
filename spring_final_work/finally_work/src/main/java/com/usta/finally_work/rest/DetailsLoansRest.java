package com.usta.finally_work.rest;

import com.usta.finally_work.model.DetailsLoans;
import com.usta.finally_work.service.DetailsLoansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/detailsLoans")
public class DetailsLoansRest {

    @Autowired
    private DetailsLoansService detailsLoansService;

    @GetMapping("seeList")
    private ResponseEntity<List<DetailsLoans>> toListDetailsLoans(){
        return ResponseEntity.ok(detailsLoansService.toListDetailsLoans());
    }

    @PostMapping("create")
    private ResponseEntity<DetailsLoans> saveDetailsLoans(@RequestBody DetailsLoans detailsLoans){
        DetailsLoans temporal = detailsLoansService.createDetailsLoans(detailsLoans);
        try{
            return ResponseEntity.created(new URI("/api/detailsLoans" + temporal.getIdDetailLoan())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listOne/{id}")
    private ResponseEntity<Optional<DetailsLoans>> listDetailsLoansById(@PathVariable("id") Long id){
        return ResponseEntity.ok(detailsLoansService.searchDetailsLoans(id));
    }

    @DeleteMapping("delete/{id}")
    private ResponseEntity<String> deleteDetailsLoans(@PathVariable("id") Long id){
        detailsLoansService.deleteDetailsLoans(id);
        return ResponseEntity.ok("Delete details loans successful");
    }

    @PutMapping("/edit")
    private ResponseEntity<DetailsLoans> editDetailsLoans(@RequestBody DetailsLoans detailsLoans){
        DetailsLoans temporal = detailsLoansService.createDetailsLoans(detailsLoans);
        try{
            return ResponseEntity.created(new URI("/api/detailsLoans" + temporal.getIdDetailLoan())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/total")
    private ResponseEntity<String> listarTotalCliente(){
        return ResponseEntity.ok("El total de clientes es: ");
    }
}
