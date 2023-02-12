package eu.dobschal.mapper;

import eu.dobschal.dto.XDCDTO;
import eu.dobschal.entity.XDCEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "CDI")
public interface XDCMapper {

    XDCDTO toDto(XDCEntity xdcEntity);
    List<XDCDTO> toDtos(List<XDCEntity> xdcEntities);
    XDCEntity toEntity(XDCDTO xdcDto);
    List<XDCEntity> toEntities(List<XDCDTO> xdcDtos);
}