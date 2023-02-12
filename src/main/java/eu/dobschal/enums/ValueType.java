package eu.dobschal.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum ValueType {
    String ("string"),
    Integer ("integer"),
    Double ("double"),
    Float ("float"),
    Boolean ("boolean");

    private final String name;

    private ValueType(String s) {
        name = s;
    }

    public boolean equals(String otherName) {
        return name.equals(otherName);
    }

    public String toString() {
        return this.name;
    }

    @JsonValue
    public String getName() {
        return name;
    }
}
