package com.pa1.backend;

import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.pa1.backend.domain.Administrador;
import com.pa1.backend.domain.Espaco;
import com.pa1.backend.domain.Reserva;
import com.pa1.backend.repositories.AdministradorRepository;
import com.pa1.backend.repositories.EspacoRepository;
import com.pa1.backend.repositories.ReservaRepository;

@SpringBootApplication
public class StartApplication implements CommandLineRunner {

	@Autowired
	private EspacoRepository espacoRepository;
	@Autowired
	private ReservaRepository reservaRepository;
	@Autowired
	private AdministradorRepository administradorRepository;


	public static void main(String[] args) {
		SpringApplication.run(StartApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Espaco esp1 = new Espaco(null,"Lab 2","Laboratório de informática","Prédio de Informática",false,"Luiz Antônio",false);
		Espaco esp2 = new Espaco(null,"Lab 3","Sala de estudos","Prédio de Informática",false,"Luiz Antônio",false);
		Espaco esp3 = new Espaco(null,"Auditório","Auditório do ensino médio da EAJ","Audtório possui caixa de som ...",true,"Luiz Antônio",false);

		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");

		Integer horarios[] = {1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

		Reserva r1 = new Reserva(null,sdf.parse("30-09-2019"),sdf.parse("30-10-2019"),horarios,"Taniro",esp1);
		Reserva r2 = new Reserva(null,sdf.parse("20-09-2019"),sdf.parse("30-09-2019"),horarios,"Laura",esp2);



		esp1.getReservas().addAll(Arrays.asList(r1));
		esp2.getReservas().addAll(Arrays.asList(r2));

		espacoRepository.save(Arrays.asList(esp1,esp2,esp3));
		reservaRepository.save(Arrays.asList(r1,r2));


		Administrador adm1 =  new Administrador(null,"Luiz Fernando","luizFernando@gmail.com","998328988");
		administradorRepository.save(adm1);

	}

}