package eu.dobschal.mapper;

import eu.dobschal.dto.XDCDTO;
import eu.dobschal.dto.XDCPropertyDTO;
import eu.dobschal.enums.ValueType;
import eu.dobschal.entity.XDCEntity;
import eu.dobschal.entity.XDCPropertyEntity;
import org.mapstruct.*;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "CDI")
public abstract class XDCMapper {

    @Mapping(source = "xdcEntity", target = "properties", qualifiedByName = "properties")
    public abstract XDCDTO toDto(XDCEntity xdcEntity);

    public abstract List<XDCDTO> toDtos(List<XDCEntity> xdcEntities);

    @Mapping(source = "xdcDto", target = "properties", qualifiedByName = "properties")
    public abstract XDCEntity toEntity(XDCDTO xdcDto);

    @Named("properties")
    protected List<XDCPropertyDTO> valueToValueType(XDCEntity xdcEntity) {
        return xdcEntity.getProperties()
                .stream()
                .map(xdcPropertyEntity -> {
                    XDCPropertyDTO xdcPropertyDTO = new XDCPropertyDTO();
                    xdcPropertyDTO.setTraitType(xdcPropertyEntity.getTraitType());
                    if(xdcPropertyEntity.getValueType() == null) return xdcPropertyDTO;
                    switch (xdcPropertyEntity.getValueType().toString()) {
                        case "string" -> xdcPropertyDTO.setValue(xdcPropertyEntity.getValue());
                        case "float" -> xdcPropertyDTO.setValue(Float.valueOf((xdcPropertyEntity.getValue())));
                        case "integer" -> xdcPropertyDTO.setValue(Integer.valueOf((xdcPropertyEntity.getValue())));
                        case "double" -> xdcPropertyDTO.setValue(Double.valueOf((xdcPropertyEntity.getValue())));
                        case "boolean" -> xdcPropertyDTO.setValue(Boolean.valueOf((xdcPropertyEntity.getValue())));
                    }
                    return xdcPropertyDTO;
                })
                .collect(Collectors.toList());
    }

    @Named("properties")
    protected List<XDCPropertyEntity> valueToValueType(XDCDTO xdcDTO) {
        return xdcDTO.getProperties()
                .stream()
                .map(xdcPropertyDTO -> {
                    XDCPropertyEntity xdcPropertyEntity = new XDCPropertyEntity();
                    xdcPropertyEntity.setTraitType(xdcPropertyDTO.getTraitType());
                    xdcPropertyEntity.setValue(xdcPropertyDTO.getValue().toString());
                    if (xdcPropertyDTO.getValue() instanceof String) {
                        xdcPropertyEntity.setValueType(ValueType.String);
                    } else if (xdcPropertyDTO.getValue() instanceof Integer) {
                        xdcPropertyEntity.setValueType(ValueType.Integer);
                    } else if (xdcPropertyDTO.getValue() instanceof Double) {
                        xdcPropertyEntity.setValueType(ValueType.Double);
                    } else if (xdcPropertyDTO.getValue() instanceof Float) {
                        xdcPropertyEntity.setValueType(ValueType.Float);
                    } else if (xdcPropertyDTO.getValue() instanceof Boolean) {
                        xdcPropertyEntity.setValueType(ValueType.Boolean);
                    }
                    return xdcPropertyEntity;
                })
                .collect(Collectors.toList());
    }
}