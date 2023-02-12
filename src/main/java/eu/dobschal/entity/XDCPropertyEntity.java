package eu.dobschal.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;


@Getter
@Setter
@Entity
@Table(name = "xdc_property")
public class XDCPropertyEntity extends PanacheEntity {

    // TODO: convert to enum
    String traitType;

    String value;

    @Enumerated(EnumType.STRING)
    ValueType valueType;
}
