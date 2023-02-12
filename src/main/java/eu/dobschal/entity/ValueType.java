package eu.dobschal.entity;

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

    public boolean equalsName(String otherName) {
        return name.equals(otherName);
    }

    public String toString() {
        return this.name;
    }
}
