package eu.dobschal.entity;

import eu.dobschal.enums.TraitType;
import eu.dobschal.enums.ValueType;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Getter
@Setter
@Entity
@Table(name = "xdc_property")
public class XDCPropertyEntity extends PanacheEntity {

    @Enumerated(EnumType.STRING)
    @Column(name = "trait_type")
    TraitType traitType;

    String value;

    @Enumerated(EnumType.STRING)
    @Column(name = "value_type")
    ValueType valueType;
}
