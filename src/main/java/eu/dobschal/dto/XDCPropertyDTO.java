package eu.dobschal.dto;

import eu.dobschal.enums.TraitType;
import lombok.Data;

@Data
public class XDCPropertyDTO {
    TraitType traitType;
    Object value;
}
