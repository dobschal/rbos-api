package eu.dobschal.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "xdc_property")
public class XDCPropertyEntity extends PanacheEntity {

    // TODO: convert to enum
    String traitType;

    String value;

    // TODO: use enum
    String valueType;
}
