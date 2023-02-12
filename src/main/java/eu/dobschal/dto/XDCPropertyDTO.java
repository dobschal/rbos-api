package eu.dobschal.dto;

import lombok.Data;

@Data
public class XDCPropertyDTO {
    // TODO: convert to enum
    String traitType;

    String value;

    // TODO: use enum
    String valueType;
}
