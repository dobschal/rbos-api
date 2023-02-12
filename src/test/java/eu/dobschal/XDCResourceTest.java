package eu.dobschal;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class XDCResourceTest {

    @Test
    public void testGetAllXDCs() {
        given()
                .when()
                .get("/api/v1/xdcs")
                .then()
                .statusCode(200);
    }

    @Test
    public void testPostXDC() {
        given()
                .body("{\"title\": \"Bruce\", \"description\": \"Banner\", \"imageUri\": \"Banner\"}")
                .header("Content-Type", "application/json")
                .when()
                .post("/api/v1/xdcs")
                .then()
                .statusCode(201);
    }

}