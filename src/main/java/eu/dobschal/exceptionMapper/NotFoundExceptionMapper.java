package eu.dobschal.exceptionMapper;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class NotFoundExceptionMapper implements ExceptionMapper<NotFoundException> {
    @Override
    public Response toResponse(NotFoundException exception) {
        InputStream resourceAsStream = this.getClass().getResourceAsStream("/META-INF/resources/index.html");
        assert resourceAsStream != null;
        String text = new Scanner(resourceAsStream, StandardCharsets.UTF_8).useDelimiter("\\A").next();
        return Response.status(200).entity(text).build();
    }
}
