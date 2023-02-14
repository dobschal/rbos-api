package eu.dobschal;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import eu.dobschal.dto.XDCDTO;
import eu.dobschal.dto.XDCPropertyDTO;
import eu.dobschal.enums.TraitType;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import java.util.List;

import static io.restassured.RestAssured.given;
import static org.hamcrest.core.Is.is;

@QuarkusTest
public class XDCResourceTest {

    // TODO: Setup H2 in memory database to not use "real" database for testing

    @Test
    public void testGetAllXDCs() {
        given()
                .when()
                .get("/api/v1/xdcs")
                .then()
                .statusCode(200);
    }

    @Test
    public void testSingleXDCResource() throws JsonProcessingException {

        XDCDTO fakeXdc = getFakeXdc();
        ObjectMapper objectMapper = new ObjectMapper();
        String xdcJson = objectMapper.writeValueAsString(fakeXdc);

        given()
                .body(xdcJson)
                .header("Content-Type", "application/json")
                .when()
                .post("/api/v1/xdcs")
                .then()
                .statusCode(201);

        given()
                .when()
                .get("/api/v1/xdcs/" + fakeXdc.getName())
                .then()
                .statusCode(200)
                .body(is(xdcJson));

        given()
                .body(xdcJson)
                .header("Content-Type", "application/json")
                .when()
                .delete("/api/v1/xdcs/" + fakeXdc.getName())
                .then()
                .statusCode(200);
    }

    private XDCDTO getFakeXdc() {

        XDCPropertyDTO xdcPropertyDTO = new XDCPropertyDTO();
        xdcPropertyDTO.setValue("fake");
        xdcPropertyDTO.setTraitType(TraitType.BaselineXDC);

        XDCDTO xdcDto = new XDCDTO();
        xdcDto.setName("fake");
        xdcDto.setDescription("fake");
        xdcDto.setImageUri("fake");
        xdcDto.setProperties(List.of(xdcPropertyDTO));

        return xdcDto;
    }

}