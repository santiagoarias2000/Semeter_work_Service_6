package com.usta.finally_work.rest;

import com.usta.finally_work.model.Authors;
import com.usta.finally_work.service.AuthorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/authors")
public class AuthorsRest {

    @Autowired
    private AuthorsService authorsService;

    @GetMapping("seeList")
    private ResponseEntity<List<Authors>> toListAuthors(){
        return ResponseEntity.ok(authorsService.toListAuthors());
    }

    @PostMapping("create")
    private ResponseEntity<Authors> saveAuthors(@RequestBody Authors authors){
        Authors temporal = authorsService.createAuthors(authors);
        try{
            return ResponseEntity.created(new URI("/api/customer" + temporal.getIdAuthor())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listOne/{id}")
    private ResponseEntity<Optional<Authors>> listAuthorsById(@PathVariable("id") Long id){
        return ResponseEntity.ok(authorsService.searchById(id));
    }

    @DeleteMapping("delete/{id}")
    private ResponseEntity<String> deleteAuthors(@PathVariable("id") Long id){
        authorsService.deleteById(id);
        return ResponseEntity.ok("Delete authors successful");
    }

    @PutMapping("/edit")
    private ResponseEntity<Authors> editAuthors(@RequestBody Authors authors){
        Authors temporal = authorsService.createAuthors(authors);
        try{
            return ResponseEntity.created(new URI("/api/customer" + temporal.getIdAuthor())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/total")
    private ResponseEntity<String> listarTotalCliente(){
        return ResponseEntity.ok("El total de clientes es: ");
    }
}
