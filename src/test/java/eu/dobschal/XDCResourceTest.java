package eu.dobschal;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class XDCResourceTest {

    // TODO: Setup H2 in memory database and add more tests

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
                .body("{\"name\": \"Bruce\", \"description\": \"Banner\", \"imageUri\": \"Banner\", \"properties\": []}")
                .header("Content-Type", "application/json")
                .when()
                .post("/api/v1/xdcs")
                .then()
                .statusCode(201);
    }

}