package eu.dobschal;

import eu.dobschal.dto.XDCDTO;
import eu.dobschal.enums.TraitType;
import eu.dobschal.mapper.XDCMapper;
import eu.dobschal.service.XDCService;
import org.jboss.logging.Logger;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

// TODO: add exception handler and custom exceptions

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

    @GET
    @Path("/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getByName(@PathParam("name") String name) {
        XDCDTO xdcDto = xdcMapper.toDto(xdcService.getByName(name));
        return Response.ok(xdcDto).build();
    }

    @GET
    @Path("/trait-types")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTraitTypes() {
        return Response.ok(TraitType.values()).build();
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
