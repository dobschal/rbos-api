package eu.dobschal.dto;

import lombok.Data;

import java.util.List;

@Data
public class XDCDTO {
    String name;
    String description;
    String imageUri;
    List<XDCPropertyDTO> properties;
}
