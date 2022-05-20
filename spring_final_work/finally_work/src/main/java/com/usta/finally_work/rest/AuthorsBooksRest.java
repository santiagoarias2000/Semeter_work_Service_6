package com.usta.finally_work.rest;

import com.usta.finally_work.model.AuthorsBooks;
import com.usta.finally_work.service.AuthorsBooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/authorsBook")
public class AuthorsBooksRest {

    @Autowired
    private AuthorsBooksService authorsBooksService;

    @GetMapping("seeList")
    private ResponseEntity<List<AuthorsBooks>> toListAuthorsBooks(){
        return ResponseEntity.ok(authorsBooksService.toListAuthorsBooks());
    }

    @PostMapping("create")
    private ResponseEntity<AuthorsBooks> saveAuthorsBooks(@RequestBody AuthorsBooks authorsBooks){
        AuthorsBooks temporal = authorsBooksService.createAuthorsBooks(authorsBooks);
        try{
            return ResponseEntity.created(new URI("/api/authorsBooks" + temporal.getIdAuthorBook())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listOne/{id}")
    private ResponseEntity<Optional<AuthorsBooks>> listAuthorsBooksById(@PathVariable("id") Long id){
        return ResponseEntity.ok(authorsBooksService.searchAuthorsBooks(id));
    }

    @DeleteMapping("delete/{id}")
    private ResponseEntity<String> deleteAuthorsBooks(@PathVariable("id") Long id){
        authorsBooksService.deleteAuthorsBooks(id);
        return ResponseEntity.ok("Delete Authors Books successful");
    }

    @PutMapping("/edit")
    private ResponseEntity<AuthorsBooks> editAuthors(@RequestBody AuthorsBooks authorsBooks){
        AuthorsBooks temporal = authorsBooksService.createAuthorsBooks(authorsBooks);
        try{
            return ResponseEntity.created(new URI("/api/authorsBooks" + temporal.getIdAuthorBook())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/total")
    private ResponseEntity<String> listarTotalCliente(){
        return ResponseEntity.ok("El total de clientes es: ");
    }
}
