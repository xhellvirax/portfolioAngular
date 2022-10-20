package com.miaplicacion.restapi.Security.Service;
import com.miaplicacion.restapi.Entity.Persona;
import com.miaplicacion.restapi.Interface.PersonaService;
import com.miaplicacion.restapi.Repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ImpPersonaService implements PersonaService {
    @Autowired PersonaRepository personaRepository;

    @Override
    public List<Persona> getPersona() {
        List<Persona> persona = personaRepository.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        personaRepository.save(persona);
    }

    @Override
    public void deletePersona(long id) {
        personaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(long id) {
        Persona persona = personaRepository.findById(id).orElse(null);
        return persona;
    }
    
}
