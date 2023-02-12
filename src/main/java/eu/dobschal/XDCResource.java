package eu.dobschal;

import eu.dobschal.dto.XDCDTO;
import eu.dobschal.mapper.XDCMapper;
import eu.dobschal.service.XDCService;
import org.jboss.logging.Logger;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

// TODO: add PATCH route
// TODO: add exception handler and custom exceptions
// TODO: use id instead of name as identifier?

@Path("/api/v1/xdcs")
public class XDCResource {

    private static final Logger LOG = Logger.getLogger(XDCResource.class);

    @Inject
    XDCService xdcService;

    @Inject
    XDCMapper xdcMapper;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAll() {
        List<XDCDTO> xdcDtos = xdcMapper.toDtos(xdcService.getAll());
        return Response.ok(xdcDtos).build(); // TODO: have extendable response object
    }

    @DELETE
    @Path("/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteByName(@PathParam("name") String name) {
        xdcService.deleteByName(name);
        return Response.ok().build();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response post(XDCDTO xdcRecord) {
        xdcService.save(xdcMapper.toEntity(xdcRecord));
        return Response.ok().status(201).build();
    }

    @PUT
    @Path("/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response patch(@PathParam("name") String name, XDCDTO xdcRecord) {
        xdcService.update(name, xdcMapper.toEntity(xdcRecord));
        return Response.ok().build();
    }
}
