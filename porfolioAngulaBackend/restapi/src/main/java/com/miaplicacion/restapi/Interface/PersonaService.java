package com.miaplicacion.restapi.Interface;
import com.miaplicacion.restapi.Entity.Persona;
import java.util.List;


public interface PersonaService {
     // Traer una lista de personas
    public List<Persona> getPersona();
    // Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    // Eliminar un objeto por ID
    public void deletePersona(long id);
    
    // Buscar una persona por ID
    public Persona findPersona(long id);
}
