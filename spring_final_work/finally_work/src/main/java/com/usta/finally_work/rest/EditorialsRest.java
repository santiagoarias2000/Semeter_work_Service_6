package com.usta.finally_work.rest;

import com.usta.finally_work.model.Editorials;
import com.usta.finally_work.service.EditorialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/editorials")
public class EditorialsRest {

    @Autowired
    private EditorialsService editorialsService;

    @GetMapping("seeListEditorial")
    private ResponseEntity<List<Editorials>> toListEditorial(){
        return ResponseEntity.ok(editorialsService.toListEditorials());
    }

    @PostMapping("createEditorial")
    private ResponseEntity<Editorials> saveEditorial(@RequestBody Editorials editorials){
        Editorials temporal = editorialsService.createEditorials(editorials);
        try{
            return ResponseEntity.created(new URI("/api/editorial" + temporal.getIdEditorial())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listEditorial/{id}")
    private ResponseEntity<Optional<Editorials>> listEditorialById(@PathVariable("id") Long id){
        return ResponseEntity.ok(editorialsService.searchById(id));
    }

    @DeleteMapping("delete/{id}")
    private ResponseEntity<String> deleteEditorial(@PathVariable("id") Long id){
        editorialsService.deleteById(id);
        return ResponseEntity.ok("Delete customer successful");
    }

    @PutMapping("/edit")
    private ResponseEntity<Editorials> editCustomer(@RequestBody Editorials editorial){
        Editorials temporal = editorialsService.createEditorials(editorial);
        try{
            return ResponseEntity.created(new URI("/api/editorial" + temporal.getIdEditorial())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "/totalCustomer")
    private ResponseEntity<String> listarTotalCliente(){
        return ResponseEntity.ok("El total de clientes es: ");
    }
}
