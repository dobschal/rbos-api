package eu.dobschal;

import eu.dobschal.entity.Fake;

import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

// Learning Source: https://www.youtube.com/watch?v=kAui1-4KBrk

@Path("/hello")
public class ExampleResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }

    @GET
    @Path("/fake")
    @Produces(MediaType.APPLICATION_JSON)
    public Response fake() {
        List<Fake> fakes = Fake.listAll();
        return Response.ok(fakes).build();
    }

    @GET
    @Path("/fake-new")
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Response createFake() {
        Fake fake = new Fake();
        fake.setTitle("Damn Nice");
        fake.persist();
        return Response.ok().build();
    }
}