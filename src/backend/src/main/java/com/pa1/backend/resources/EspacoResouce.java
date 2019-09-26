package com.pa1.backend.resources;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import com.pa1.backend.dto.EspacoDTO;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.pa1.backend.domain.Espaco;
import com.pa1.backend.services.EspacoService;

//classe vai ser um controlador REST
@RestController
@RequestMapping(value = "/espacos") // vai responder por este endPoint
public class EspacoResouce {

	@Autowired
	private EspacoService service;

	@ApiOperation("Buscar Espaço pelo id")
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> findById(
			@ApiParam("Id do objeto cadastrado de Espaço")
			@PathVariable Integer id) {
		Espaco obj = service.buscar(id);
		return ResponseEntity.ok().body(obj);
	}

	@ApiOperation("Listar todos os Espaços")
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Espaco>> findAll() {
		List<Espaco> list= service.findAll();
		return ResponseEntity.ok().body(list);

	}





	@ApiOperation("Cadastrar um Espaço")
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insertEspaco(
			@ApiParam("Objeto de Espaço para salvar no Banco de dados")
			@RequestBody EspacoDTO objDto) {
		Espaco obj = service.fromDTO(objDto);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdEspaco()).toUri();
		return ResponseEntity.created(uri).build();
	}


	//Marcar espaco como especial
	@RequestMapping(path = "/espacoUp", method = RequestMethod.POST)
	public ResponseEntity<?> updateEspaco(
			@ApiParam("Objeto Json com o status de especial ja atualizado ")
			@RequestBody Espaco obj) {



		if(obj == null) {
			return ResponseEntity.notFound().build();
		}else {
			obj = service.buscar(obj.getIdEspaco());
			service.insert(obj);

			return ResponseEntity.noContent().build();
		}
	}
/*
	//Fazendo update com POST
	@RequestMapping(path = {"/id"}, method = RequestMethod.POST)
	public ResponseEntity<Void> updateEspaco(@RequestBody EspacoDTO objDto, @PathVariable Integer id) {
		Espaco obj = service.fromDTO(objDto);
		obj.setIdEspaco(id);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdEspaco()).toUri();
		return ResponseEntity.created(uri).build();
	}
	*/
}
