package eu.dobschal.dto;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;

import java.util.List;

@Data
public class XDCDTO {
    String name;
    String description;
    String imageUri;
    List<XDCPropertyDTO> properties;
}
