package eu.dobschal.enums;

import com.fasterxml.jackson.annotation.JsonValue;

public enum TraitType {

    ModelVersion ("Model Version"),
    TargetYear ("Target Year"),
    BaselineXDC ("Baseline XDC"),
    BaseYear ("Base Year");
    private final String name;

    TraitType(String s) {
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
