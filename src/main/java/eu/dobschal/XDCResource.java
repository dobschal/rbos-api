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
        List<XDCDTO> xdcdtos = xdcMapper.toDtos(xdcService.getAll());
        LOG.infov("Get all XDCs: {0}", xdcdtos);
        return Response.ok(xdcdtos).build();
    }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response post(XDCDTO xdcRecord) {
        // TODO: validate input properties
        LOG.infov("Save XDC: {0}", xdcRecord);
        try {
            xdcService.save(xdcMapper.toEntity(xdcRecord));
            return Response.ok().status(201).build();
        } catch (Exception e) {
            //  TODO: better error handling
            return Response.serverError().build();
        }
    }
}
