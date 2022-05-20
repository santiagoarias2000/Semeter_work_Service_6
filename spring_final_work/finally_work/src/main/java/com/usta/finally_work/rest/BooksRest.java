package com.usta.finally_work.rest;

import com.usta.finally_work.model.Books;
import com.usta.finally_work.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/book")
public class BooksRest {

    @Autowired
    private BooksService booksService;

    @GetMapping("seeList")
    private ResponseEntity<List<Books>> toListBook(){
        return ResponseEntity.ok(booksService.toListBooks());
    }

    @PostMapping("create")
    private ResponseEntity<Books> saveBooks(@RequestBody Books book){
        Books temporal = booksService.createBooks(book);
        try{
            return ResponseEntity.created(new URI("/api/book" + temporal.getIdBook())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listOne/{id}")
    private ResponseEntity<Optional<Books>> listBooksById(@PathVariable("id") Long id){
        return ResponseEntity.ok(booksService.searchBooks(id));
    }

    @DeleteMapping("delete/{id}")
    private ResponseEntity<String> deleteAuthors(@PathVariable("id") Long id){
        booksService.deleteBooks(id);
        return ResponseEntity.ok("Delete book successful");
    }

    @PutMapping("/edit")
    private ResponseEntity<Books> editAuthors(@RequestBody Books book){
        Books temporal = booksService.createBooks(book);
        try{
            return ResponseEntity.created(new URI("/api/book" + temporal.getIdBook())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/total")
    private ResponseEntity<String> listarTotalCliente(){
        return ResponseEntity.ok("El total de clientes es: ");
    }
}
