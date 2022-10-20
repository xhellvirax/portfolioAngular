package com.miaplicacion.restapi.Repository;
import com.miaplicacion.restapi.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long>{
    
    
}
